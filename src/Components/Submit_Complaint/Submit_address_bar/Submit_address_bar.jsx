import "./Submit_address_bar.scss"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Submit_address_bar = () => {
    return (
      <>
        <div className="submit_addressbar">
          <a href="#" className="address_bar_a">
            Home
          </a>
          <ChevronRightIcon />
          <p>Submit a Complaint</p>
        </div>
      </>
    );
}
 
export default Submit_address_bar;