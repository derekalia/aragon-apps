import React from "react";
import styled from "styled-components";
import { Text, theme, Countdown } from "@aragon/ui";
import { formatTokenAmount } from "../../lib/utils";

class AvaliableSalary extends React.Component {
  msToCountDown(timeInMs) {
    return new Date(timeInMs);
  }

  splitAmount = amount => {
    const [integer, fractional] = formatTokenAmount(amount).split(".");
    return (
      <span>
        <span className="integer">{integer}</span>
        {fractional && <span className="fractional">.{fractional}</span>}
      </span>
    );
  };

  render() {
    const { avaliableBalance, totalTransfered, yrSalary, targetDate } = this.props;

    return (
      <div>
        <Text size="large">Available salary</Text>
        <AvaliableSalaryTitleGrid>
          <HeaderCell style={{ marginLeft: "20px" }}>
            <Text size="xsmall" color={theme.textSecondary}>
              TIME SINCE LAST SALARY
            </Text>
          </HeaderCell>
          <HeaderCell>
            <Text size="xsmall" color={theme.textSecondary}>
              AVALIABLE BALANCE
            </Text>
          </HeaderCell>
          <HeaderCell>
            <Text size="xsmall" color={theme.textSecondary}>
              TOTAL TRANSFERED
            </Text>
          </HeaderCell>
          <HeaderCell>
            <Text size="xsmall" color={theme.textSecondary}>
              YOUR YEARLY SALARY
            </Text>
          </HeaderCell>

          <WhiteCellEnd border="1px 0px 1px 1px" style={{ paddingLeft: "22px", paddingTop: "27px", minWidth: "200px" }} left >
            <CountdownWStyle end={this.msToCountDown(targetDate)} />
          </WhiteCellEnd>
          <WhiteCell border="1px 0px 1px 0px">
            <Text size="xxlarge" color="#21D48E">
              <Amount>${this.splitAmount(avaliableBalance.toFixed(2))}</Amount>
            </Text>
          </WhiteCell>
          <WhiteCell border="1px 0px 1px 0px">
            <Text size="xxlarge">
              <Amount>${this.splitAmount(totalTransfered.toFixed(2))}</Amount>
            </Text>
          </WhiteCell>
          <WhiteCellEnd border="1px 1px 1px 0px" right>
            <Text size="xxlarge">
              <Amount>${this.splitAmount(yrSalary.toFixed(2))}</Amount>
            </Text>
          </WhiteCellEnd>
        </AvaliableSalaryTitleGrid>
      </div>
    );
  }
}

const HeaderCell = styled.div`
  margin-bottom: 8px;
`;
const WhiteCell = styled.div`
  background-color: white;
  padding: 20px 0px 20px 0px;
  border: solid #e8e8e8 0px;
  border-width: ${props => props.border};
`;

const WhiteCellEnd = WhiteCell.extend`
  border-top-left-radius: ${props => props.left && "3px"};
  border-bottom-left-radius: ${props => props.left && "3px"};
  border-top-right-radius: ${props => props.right && "3px"};
  border-bottom-right-radius: ${props => props.right && "3px"};
`;

const AvaliableSalaryTitleGrid = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto;
`;

const CountdownWStyle = styled(Countdown)`
  display: flex;
  margin-top: 10px;
`;

const Amount = styled.div`
  font-size: 26px;
  .fractional {
    font-size: 14px;
  }
`;

export default AvaliableSalary;