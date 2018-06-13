import React from "react";
import styled from "styled-components";
import { Text, Button, Info, TextInput, IconFundraising, theme } from "@aragon/ui";
import LinkedSliders from "./LinkedSliders";
import SideChart2 from "./SideChart2";

class SidePanelContent extends React.Component {
  render() {
    console.log(this.props.requestSalary);
    return (
      <div>
        {this.props.requestSalary ? (
          <SalaryContainer>
            <SideChart2
              holders={[
                { name: "ETH", balance: 1329, price: 39.99 },
                { name: "ANT", balance: 3321, price: 39.99 },
                { name: "SNT", balance: 1131, price: 39.99 }
              ]}
              tokenSupply={10000}
              tokenDecimalsBase={5}
              openSlider={this.handleNewTransferOpen}
              handleSidePanelChange={this.props.handleSidePanelChange}
            />

            <Line />
            <SalaryGrid>
              <Title>
                <Text weight="bold" size="large">
                  Total salary
                </Text>
              </Title>

              <MoneyBox>
                <Flexbox>
                  <IconFundraising />
                  <Text color={theme.textSecondary} size="large">
                    Total salary to be paid
                  </Text>
                </Flexbox>
                <Text weight="bold" size="xxlarge">
                  $6,245.52
                </Text>
              </MoneyBox>

              <div />

              <Info.Permissions title="Submission note">
                The actual exchange rate might change once the transaction takes place
              </Info.Permissions>

              <Button
                mode="strong"
                onClick={() => {
                  this.props.handleSidePanelChange();
                }}
              >
                Request Salary
              </Button>
            </SalaryGrid>
          </SalaryContainer>
        ) : (
          <Container>
            <Info.Action title="Choose which tokens you get paid in">
              You can add as many tokens as you like, as long as your DAO has these tokens.
            </Info.Action>

            <LinkedSliders />

            <Info.Permissions title="Submission note">
              Your split contract will be updated on the blockchain, and you cannot request salary until it’s complete{" "}
            </Info.Permissions>

            <Button
              mode="strong"
              onClick={() => {
                this.props.handleSidePanelChange();
              }}
            >
              Submit split configuration
            </Button>
          </Container>
        )}
      </div>
    );
  }
}

const SalaryContainer = styled.div`
padding-bottom: 0px;
`;

const SalaryGrid = styled.div`
  display: grid;
  height: 57vh;
  grid-template-rows: 40px 110px 120px 90px 50px;
  grid-gap: 20px;
`;

const Line = styled.div`
  border: 0.5px solid #d1d1d1;
`;

const Flexbox = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MoneyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edf8fe;
  padding: 25px;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 112px 53vh 100px 50px;
  grid-gap: 30px;
`;

export default SidePanelContent;
