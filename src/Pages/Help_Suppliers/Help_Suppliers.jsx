import Eight_major_suppliers from "../../Components/Help___Suppliers/Eight_major_suppliers/Eight_major_suppliers";
import Find_Suppliers from "../../Components/Help___Suppliers/Find_Suppliers/Find_Suppliers";
import Pattern_Suppliers from "../../Components/Help___Suppliers/Pattern_Suppliers/Pattern_Suppliers";
import Suppliers_Banner from "../../Components/Help___Suppliers/Suppliers_Banner/Suppliers_Banner";
import Why_choose_Suppliers from "../../Components/Help___Suppliers/Why_choose_Suppliers/Why_choose_Suppliers";

const Help_Suppliers = () => {
  return (
    <>
      <Suppliers_Banner />
      <Why_choose_Suppliers />
      <Eight_major_suppliers />
      <Pattern_Suppliers />
      <Find_Suppliers />
    </>
  );
};

export default Help_Suppliers;
