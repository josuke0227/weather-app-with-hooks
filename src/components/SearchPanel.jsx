import React from "react";
import searchIconNight from "../img/icon/search-icon.svg";
import searchIconDay from "../img/icon/search-black-18dp.svg";
import areas from "../constants/areas";
import styled from "styled-components";
import Icon from "./common/Icon";
import LoaderIndicator from "./common/LoaderIndicator";

const StyledInput = styled.input`
  width: 100%;
  height: 4vh;
  color: var(--tx-primary);
  background-color: var(--bg-main);
  border: 1px solid var(--tx-primary);
  padding: 18px 18px 18px 45px;
  background: url(${(props) => (props.isDay ? searchIconDay : searchIconNight)})
    no-repeat 5%;
  outline: none;

  ::placeholder {
    color: var(--tx-primary);
  }
`;

const ResultWrapper = styled.div`
  border: 1px solid;
  height: 8vh;
  display: flex;
  align-items: center;
  padding-left: 25px;

  :hover {
    borer-color: var(--tx-secondary);
    color: var(--tx-secondary);
    cursor: pointer;
  }
`;

const SearchPanelWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const ResultsContainer = styled.div`
  height: 68vh;
  overflow: scroll;
`;

const CloseIconWrapper = styled.span`
  width: fit-content;
  display: block;
  text-align: end;
  cursor: pointer;
  margin-left: auto;
`;

const SearchPanel = ({
  isDay,
  setOpen,
  setTerm,
  setResults,
  term,
  results,
  setCurrentLocation,
}) => {
  const onResultClick = (result) => {
    setCurrentLocation(result);
    setOpen(false);
    setResults([]);
    setTerm("");
  };

  return (
    <SearchPanelWrapper id="search-panel" className="bg-secondary p-4">
      <CloseIconWrapper
        onClick={() => setOpen(false)}
        className="material-icons tx-primary"
      >
        close
      </CloseIconWrapper>
      <form className="ma-3" onSubmit={(e) => e.preventDefault()}>
        <StyledInput
          isDay={isDay}
          id="locSerch"
          type="text"
          placeholder="Search location"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      <ResultsContainer>
        <LoaderIndicator
          position="relative"
          color="#ffec65"
          area={areas.search}
          name="ThreeDots"
        />
        {results.length &&
          results.map((result) => {
            return (
              <ResultWrapper
                className="tx-primary ma-3"
                key={result.id}
                onClick={() => onResultClick(result)}
              >
                {result.title}
                <Icon name="chevron_right" />
              </ResultWrapper>
            );
          })}
      </ResultsContainer>
    </SearchPanelWrapper>
  );
};

export default SearchPanel;
