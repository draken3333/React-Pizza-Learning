import React from "react"
import ContentLoader from "react-content-loader"

const PlaceHolder = (props) => (
  <ContentLoader 
  speed={2}
  width={280}
  height={350}
  viewBox="0 0 280 350"
  backgroundColor="#4f4f4f"
  foregroundColor="#ffffff"
  {...props}
>
  <rect x="18" y="22" rx="0" ry="0" width="260" height="206" /> 
  <rect x="19" y="260" rx="0" ry="0" width="260" height="37" /> 
  <rect x="109" y="62" rx="0" ry="0" width="0" height="1" /> 
  <rect x="18" y="235" rx="0" ry="0" width="260" height="20" /> 
  <rect x="189" y="306" rx="0" ry="0" width="95" height="28" /> 
  <rect x="20" y="309" rx="0" ry="0" width="81" height="24" />
  </ContentLoader>
)

export default PlaceHolder

