/* 
import styled from "styled-components"

    const Divdad = styled.div`
        position: relative;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: linear-gradient(to bottom right, #4a5568, #000000);
    `;

    const Topbg = styled.div`
        position: absolute;
        left: -160px;
        top: -160px;
        height: 500px;
        width: 500px;
        border-radius: 999px;
        filter: blur(70px);
        background: linear-gradient(to bottom right, #16a34a, #1d4ed8);
    `;

    const Bottombg = styled.div`
        position: absolute;
        right: -160px;
        bottom: -160px;
        height: 500px;
        width: 500px;
        border-radius: 999px;
        filter: blur(70px);
        background: linear-gradient(to bottom right, #1d4ed8, #16a34a);
    `; 

export { Divdad, Topbg, Bottombg } 

 */
export default function BackGround() {
	return (
		<div className="relative inset-0 h-screen w-screen overflow-hidden transition-colors duration-200 bg-linear-to-br from-slate-700 from-5% to-95% to-white -z-50 dark:bg-linear-to-br dark:to-black dark:transition-colors dark:duration-200">
			<div className="absolute -left-40 -top-40 h-96 w-9/12 rounded-full blur-3xl bg-linear-to-br from-green to-blue -z-40"></div>
			<div className="absolute -right-40 -bottom-40 h-96 w-9/12 rounded-full blur-3xl bg-linear-to-br from-blue to-green -z-40"></div>
		</div>
	);
}