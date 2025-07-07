import { useTranslation } from "../providers/TranslationProvider";
import Table from "../components/Table";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const Requests = () => {
  const { translate } = useTranslation();

  const headers = [
    translate("table.name"),
    translate("table.ID"),
    translate("table.AccountCost"),
    translate("table.walletLink"),
    translate("table.action"),
  ];

  const data = [
    {
      info: {
        name: "John Doe",
        img: "/images/Avatar Circle.png",
        gmail: "john.doe@gmail.com",
      },
      ID: "14857",
      AccountCost: "$120",
      walletLink: "HTTP/john.doe.wallet",
    },
    {
      info: {
        name: "Sarah Connor",
        img: "/images/Avatar Circle.png",
        gmail: "sarah.connor@gmail.com",
      },
      ID: "25896",
      AccountCost: "$150",
      walletLink: "HTTP/sarah.connor.wallet",
    },
  ];

  const renderActions = () => (
    <div className="flex items-center justify-center gap-3">
      <button
        className="text-[#14CA74] hover:text-green-400 text-xl"
        title={translate("button.edit")}
        onClick={() => console.log("Edit action")}
      >
        <MdModeEditOutline />
      </button>
      <button
        className="text-[#EA3943] hover:text-red-500 text-xl"
        title={translate("button.delete")}
        onClick={() => console.log("Delete action")}
      >
        <FaTrash />
      </button>
    </div>
  );

  return (
    <div className="p-4 bg-black min-h-screen w-full">
      <div className="max-w-[100%] mx-auto grid grid-cols-1 gap-4">
        <Table
          columns={headers.length}
          headers={headers}
          data={data}
          renderCell={(row, rowIndex, colIndex) => {
            switch (colIndex) {
              case 0:
                return (
                  <div className="flex items-center gap-0 justify-between w-full">
                  <img
                    src={row.info.img}
                    alt={row.info.name}
                    className="w-6 rounded-full object-cover"
                  />
                  <div className="flex flex-col text-end">
                    <span className="text-[14px] font-semibold">{row.info.name}</span>
                    <span className="text-[12px] text-gray-400">{row.info.gmail}</span>
                  </div>
                </div>
                );
              case 1:
                return row.ID;
              case 2:
                return row.AccountCost;
              case 3:
                return (
                  <a
                    href={row.walletLink}
                    className="text-blue-500 underline"
                    target="_blank"
                  >
                    Wallet
                  </a>
                );
              case 4:
                return renderActions();
              default:
                return null;
            }
          }}
        />
      </div>
    </div>
  );
};

export default Requests;
