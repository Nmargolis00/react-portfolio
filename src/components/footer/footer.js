import * as React from "react";
import "./footer.css";
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="icon-wrapper">
      <a href="https://github.com/Nmargolis00" target="_blank" rel="noreferrer">
        <GitHubIcon className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/nate-margolis-9105b019/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon className="icon" />
      </a>
      </div>
      <h6 className="copy-right">&copy; 2023 Nate Margolis</h6>
    </div>
  );
}
//   const [value, setValue] = React.useState(0);

//   return (
//     <div className="footer-div" >
//       <BottomNavigation className="footer-box">
//         <a
//           href="https://github.com/Nmargolis00"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <BottomNavigationAction
//             className="icon"
//             label="GitHub"
//             icon={<GitHubIcon />}
//           />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/nate-margolis-9105b019/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <BottomNavigationAction
//             className="icon"
//             label="LinkedIn"
//             icon={<LinkedInIcon />}
//           />
//         </a>
//       </BottomNavigation>

//       <h6 className="copy-right">&copy; 2023 Nate Margolis</h6>

//     </div>
//   );
// }
