import * as React from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import i18n from "i18next";
import Markdown from 'markdown-to-jsx';

import "../utils/i18n";
import { LANGUAGES } from "../utils/constants";
import SideMenu from "../components/side-menu";
import appStorage from "../utils/storage";

const content = {
  en: `
# Help and Support
## Immediate help
For information on bus status, next available bus, timings, and issues with current bus please reach out to the BMTC Vayu Vajra helpline at [77609 91269](tel:7760991269)
## Community help
Join the Friends of BMTC [Telegram group](bit.ly/friendsofbmtc) for any queries, and doubts that other active members of the community can help with.
## Technical help
The site is designed and developed by Team Bengawalk. In case of bugs, issues or feature requests for the application, reach out to us on [Discord](https://discord.gg/XhmvDP4kXp) or [Github](https://github.com/bengawalk/kia).  
You can also find us on [Twitter](https://twitter.com/bengawalk), [Instagram](https://www.instagram.com/bengawalk/), and [YouTube](https://www.youtube.com/@bengawalk).  
`,
  kn: `
# ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ
## ತಕ್ಷಣದ ಸಹಾಯ
ಬಸ್ ಸ್ಥಿತಿ, ಮುಂದಿನ ಲಭ್ಯವಿರುವ ಬಸ್, ಸಮಯ ಮತ್ತು ಪ್ರಸ್ತುತ ಬಸ್‌ನ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು BMTC ವಾಯು ವಜ್ರ ಸಹಾಯವಾಣಿಯನ್ನು [77609 91269](ದೂರವಾಣಿ:7760991269) ನಲ್ಲಿ ಸಂಪರ್ಕಿಸಿ
## ಸಮುದಾಯ ಸಹಾಯ
ಸಮುದಾಯದ ಇತರ ಸಕ್ರಿಯ ಸದಸ್ಯರು ಸಹಾಯ ಮಾಡಬಹುದಾದ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಅನುಮಾನಗಳಿಗಾಗಿ BMTC [ಟೆಲಿಗ್ರಾಮ್ ಗುಂಪು](bit.ly/friendsofbmtc) ನ ಸ್ನೇಹಿತರನ್ನು ಸೇರಿ.
## ತಾಂತ್ರಿಕ ಸಹಾಯ
ಸೈಟ್ ಅನ್ನು ಟೀಮ್ ಬೆಂಗಾವಾಕ್ ವಿನ್ಯಾಸಗೊಳಿಸಿದೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದೆ. ಅಪ್ಲಿಕೇಶನ್‌ಗಾಗಿ ದೋಷಗಳು, ಸಮಸ್ಯೆಗಳು ಅಥವಾ ವೈಶಿಷ್ಟ್ಯದ ವಿನಂತಿಗಳ ಸಂದರ್ಭದಲ್ಲಿ, [ಡಿಸ್ಕಾರ್ಡ್](https://discord.gg/XhmvDP4kXp) ಅಥವಾ [ಗಿಥಬ್‌ನಲ್ಲಿ](https://github.com/bengawalk/kia) ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.  
ನೀವು ನಮ್ಮನ್ನು [ಟ್ವಿಟರ್](https://twitter.com/bengawalk), [ಇನ್ಸ್ಟಾಗ್ರಾಮ್](https://www.instagram.com/bengawalk/) ಮತ್ತು [ಯೂಟ್ಯೂಬ್](https://www.youtube.com/@bengawalk) ನಲ್ಲಿಯೂ ಕಾಣಬಹುದು.
`,
};

const HelpSupport = () => {
  const [lang, setLang] = useState(
    appStorage.getItem("lang") || LANGUAGES[0].code,
  );
  useEffect(() => {
    appStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <>
      <SideMenu setLang={setLang} />
      <Markdown>{content[lang] || content.en}</Markdown>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<HelpSupport />);
