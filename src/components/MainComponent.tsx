import ContactComponent from "./Contact/ContactComponent";
import CrawlerComponent from "./CrawlerApp/CrawlerComponent";

type Props = {
    selectedMenuItem: string;
}

function MainComponent({selectedMenuItem}: Props) {
    switch(selectedMenuItem) {
        case 'home':
          return <CrawlerComponent />
        case 'contact':
          return <ContactComponent />
    }
}

export default MainComponent