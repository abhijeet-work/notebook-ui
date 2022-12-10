import Header from "../header";
import { Wrapper } from "./styled";

export function Container({ children }: any) {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    )
}