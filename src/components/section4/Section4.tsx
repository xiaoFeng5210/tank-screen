import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

const Section4 = () => {
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
        <TableRow>
          <TableCell className="font-medium">01</TableCell>
          <TableCell>93%</TableCell>
          <TableCell className="text-right">加热中</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default Section4
