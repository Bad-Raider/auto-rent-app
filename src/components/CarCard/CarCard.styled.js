import styled from "@emotion/styled";
import { colors, transition } from '../../styles/common/vars';

export const ItemCar = styled.li`
    display: flex;
    flex-direction: column;
    width: 274px;
`

export const WraperImg = styled.div`
    width: 274px;
    height: 268px;
    margin-bottom: 14px;
`

export const Img = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
` 

export const WraperTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`

export const AccentSpan = styled.span`
    color: ${colors.accentColor};
`
export const DiscriptionBlock = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
`
export const BorderSpan = styled.span`
    /* color: rgba(18, 20, 23, 0.1); */
    color: black;
`

