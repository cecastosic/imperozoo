import { Table, Space, Button } from "antd";
import { Animal } from "./ProfileBox";
import "antd/dist/antd.css";

export type TableData = Pick<Animal, "name" | "breed" | "status"> & {
  age: number;
  type: string;
};

export const Administration = ({ data }: { data: TableData[] }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Breed",
      dataIndex: "breed",
      key: "breed",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Space size="small">
          <Button>Adopt</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];
  return (
    <div className="p-5">
      <style>
        {`
            .ant-table-content {
                border: 1px solid #333;
            }
            .ant-table-thead .ant-table-cell {
                background: #000;
                border-bottom: 1px solid #333;
                color: #fff;
                padding: 0.8rem 1rem;
            }
            .ant-table-tbody > tr > td {
                border-bottom: 1px solid #ccc;
                padding: 0.6rem 1rem;
            }
        `}
      </style>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
};
