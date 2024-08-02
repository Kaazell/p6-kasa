import { Banner } from "../../components/Banner/Banner";
import picture from "../../assets/images/banner-home.png";

export function Housing() {
  return (
    <div>
      <Banner
        picture={picture}
        text={"Housing = true"}
        alternative_text={"Also this"}
        housing={true}
      />
    </div>
  );
}
