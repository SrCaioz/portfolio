import styled from "styled-components"

export function BG() {
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

	return (
		<Divdad>
			<Topbg></Topbg>

			<Bottombg></Bottombg>
            <p className="absolute">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
		</Divdad>
	);
}
