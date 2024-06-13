import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import useOrderStore from "~/store/order.ts";
import {OrderProcessText} from "~/types/enum.ts";
import {useTranslation} from "react-i18next";
import {Progress} from "~/components/ui/progress"

const Section4 = () => {
  const {t} = useTranslation('orderList');
  const {t: t_status} = useTranslation('orderStatus');
  const orderList = useOrderStore(state => state.orderList)
  return (
    <Table className="w-[600px]">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">{t("order_id")}</TableHead>
          <TableHead>{t("progress")}</TableHead>
          <TableHead className="text-right">{t("status")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          orderList.map((order) => (
            <TableRow key={order.order_id}>
              <TableCell className="font-medium">{order.order_id}</TableCell>
              <TableCell>
                {/*Math.floor((count - left) / count * 100)*/}
                <Progress value={Math.floor(order.time_expected - order.time_left) / order.time_expected * 100}/>
              </TableCell>
              <TableCell className="text-right">{OrderProcessText(t_status)[order.status]}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default Section4
