import { MouseEvent } from "react";

import TableRow from "@atoms/tableRow";

type TableBodyProps = {
  subscriptionList: Array<defineType>;
  className: string;
  handleOpen: (subscId: string) => (e: MouseEvent<HTMLButtonElement>) => void;
};

type defineType = { [key: string]: string };

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>
      {props.subscriptionList?.map((body, index) => {
        // subscIdを除いたオブジェクトを作成
        const { subscId, ...data } = body;

        return (
          <TableRow
            subscription={data}
            className=""
            key={`body${index}`}
            handleOpen={props.handleOpen(subscId)}
            subscId={subscId}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
