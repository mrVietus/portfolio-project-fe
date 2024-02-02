import ContactComponent from "./Contact/ContactComponent";
import CrawlerAppComponent from "./CrawlerApp/CrawlerAppComponent";

type Props = {
    selectedMenuItem: string;
}

function MainComponent({selectedMenuItem}: Props) {
    switch(selectedMenuItem) {
        case 'home':
          return <CrawlerAppComponent />
        case 'contact':
          return <ContactComponent />
    }
}

export default MainComponent