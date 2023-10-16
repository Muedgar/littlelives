
//@ts-nocheck
import ListItemMenu from "./listitemmenu";

export default function NavBar() {
    return(
        <>
            <nav className="w-[80%] h-[100px] border-b border-[#616161] text-black flex m-auto justify-evenly items-center">
                <ul>
                    <li>
                        <h1 className="font-sans text-2xl text-left"><span className="text-cyan-800 font-bold bg-black p-2">LittleLives</span><span className="text-black-800 font-bold bg-white p-2">Consult</span></h1>
                    </li>
                </ul>
                <ul className="flex justify-evenly items-ceter">
                    <li>
                        <ListItemMenu />
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>

                <ul>
                    <li><a href="#">(+62)81 414 257</a></li>
                </ul>
            </nav>
        </>
    )
}