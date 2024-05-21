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
import { Progress } from "~/components/ui/progress"

const Section4 = () => {
  const {t} = useTranslation('orderStatus');
  const orderList = useOrderStore(state => state.orderList)
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">订单号</TableHead>
          <TableHead>进度</TableHead>
          <TableHead className="text-right">状态</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          orderList.map((order, index) => (
            <TableRow key={order.order_id}>
              <TableCell className="font-medium">{order.order_id}</TableCell>
              <TableCell>
                <Progress value={(order.time_expected - order.time_left) / order.total_time * 100} />
                </TableCell>
              <TableCell className="text-right">{OrderProcessText(t)[order.status]}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default Section4
