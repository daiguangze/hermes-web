import {useNavigate} from "react-router-dom";
import ChatGPTIcon from "../icons/chatgpt.svg";
import ChatIcon from "../icons/chat.svg";
import RoleIcon from "../icons/role.svg";
import {Path} from "@/app/constants";
import styles from "./sidebar.module.scss";


export function SideBar(){
    const navigate = useNavigate()
    return(
        <div className={styles.sidebar}>
            <div className={styles["sidebar-header"]}>
                <ChatGPTIcon/>
            </div>

            <div className={styles["sidebar-chat"]}
                 onClick={() => {
                     navigate(Path.Chat)
                 }}>
                <ChatIcon/>
            </div>

            <div className={styles["sidebar-role"]}
                 onClick={() => {
                     navigate(Path.Role)
                 }}>
                <RoleIcon/>
            </div>

        </div>
    );
}
