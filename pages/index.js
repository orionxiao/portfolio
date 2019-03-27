import Header from "../components/Header";
import { Main, Content } from "../styles";

function Index() {
    return (
        <Main>
            <Header />
            <Content>
              <h1>
                Hi, my name is Orion.
              </h1>
              <p>
                Here's some stuff about me.
              </p>
            </Content>
        </Main>
    );
}

export default Index;
