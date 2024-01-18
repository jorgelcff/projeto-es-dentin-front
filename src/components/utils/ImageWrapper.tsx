import styled from 'styled-components/native';
import { ImageProps } from 'react-native';


const ImageWrapperStyle = styled.Image`
    width: ${(props: any) => props.width ? `${props.width}` : 'auto'};
    height: ${(props: any) => props.height ? `${props.height}` : 'auto'};
    margin-left: ${(props: any) => props.marginLeft ? `${props.marginLeft}px` : 0};
    max-width: ${(props: any) => props.maxWidth ? `${props.maxWidth}` : 'auto'};
    overflow: hidden;
`;

export default function ImageWrapper({ source, ...props }: ImageProps) {
    return (
        <ImageWrapperStyle source={source} {...props}/>
    );
}