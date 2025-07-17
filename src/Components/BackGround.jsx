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
		<div className="fixed inset-0 min-h-screen w-full overflow-hidden transition-colors duration-200 bg-gradient-to-br from-slate-400 to-white dark:from-slate-800 dark:to-black -z-50">
			<div className="absolute -left-40 -top-40 h-96 w-9/12 rounded-full blur-3xl bg-gradient-to-br from-green to-blue animate-pulse -z-40 md:w-topandbottom-blur-w md:h-topandbottom-blur-h"></div>
			<div className="absolute -right-40 -bottom-40 h-96 w-9/12 rounded-full blur-3xl bg-gradient-to-br from-blue to-green animate-pulse -z-40 md:w-topandbottom-blur-w md:h-topandbottom-blur-h"></div>
		</div>
	);
}