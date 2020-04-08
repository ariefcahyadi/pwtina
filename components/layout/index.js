import { node, array, bool } from "prop-types"

import { useCreateMainDoc } from "@hooks"

import TopBar from "@components/topbar"
import SideNav from "@components/side-nav"

import { LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, allNestedDocs, showDocsSearcher }) => {
  useCreateMainDoc()

  return (
    <LayoutStyled>
      <TopBar showDocsSearcher={showDocsSearcher} />
      <LayoutBodyStyled>
        <SideNav allNestedDocs={allNestedDocs} />
        {children}
      </LayoutBodyStyled>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  allNestedDocs: array,
  children: node,
  showDocsSearcher: bool,
}

Layout.defaultProps = {
  allNestedDocs: [],
  showDocsSearcher: false,
}

export default Layout
