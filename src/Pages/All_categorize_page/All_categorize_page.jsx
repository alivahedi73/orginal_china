import Categorize_page_main_menu from "../../components/All_categorize_page/Categorize_page_main_menu/Categorize_page_main_menu";
import Categorize_Spolight from "../../components/All_categorize_page/Categorize_Spolight/Categorize_Spolight";
import Fixed_All_categorize_main_menu from "../../components/All_categorize_page/Fixed_All_categorize_main_menu/Fixed_All_categorize_main_menu";
import Header_categorize_page_A from "../../components/All_categorize_page/Header_categorize_page_A/Header_categorize_page_A";
import Search_bar_All_ctaegorize_A from "../../components/All_categorize_page/Search_bar_All_ctaegorize_A/Search_bar_All_ctaegorize_A";

const All_categorize_page = () => {
  return (
    <>
      {/* start one main menu */}
      <Categorize_page_main_menu />
      {/* end of one main menu */}
      {/* categorize spolight */}
      <Categorize_Spolight />
      {/* categorize spolight */}
      {/* header all_categorize */}
      <Header_categorize_page_A />
      {/* header all categorize */}
      {/* search Bar */}
      <Search_bar_All_ctaegorize_A />
      {/* search Bar */}
      {/* Fixed buttom */}
      <Fixed_All_categorize_main_menu />
      {/* Fixed Buttom */}
    </>
  );
};

export default All_categorize_page;
