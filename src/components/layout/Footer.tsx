import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { RECENTLY_VISITED } from '../../utils/constants';
import { StatusColor } from '../Card';

export const Footer = () => {
  const recentlyVisited: CharacterCard[] = useSelector(
    (state: RootState) => state.recentlyVisited.characters
  );

  return (
    <StyledFooter>
      <RecentlyVisited>
        {recentlyVisited.length > 0 && (
          <>
            <div>{RECENTLY_VISITED}</div>
            <Characters>
              {recentlyVisited.map((character: CharacterCard) => (
                <StyledImage
                  key={character.id}
                  src={character.image}
                  alt={character.name}
                  title={character.name}
                  status={
                    character.status?.toLowerCase() as StatusProp['status']
                  }
                />
              ))}
            </Characters>
          </>
        )}
      </RecentlyVisited>
      <div />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  div {
    font-weight: 700;
  }
`;

const RecentlyVisited = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Characters = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 30px;
  border: ${(props: StatusProp) => `3px solid ${StatusColor[props.status]}`};
`;
