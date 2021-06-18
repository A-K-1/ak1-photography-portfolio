import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const MenuIconContainer = styled.div`
  width: 40px;
  height: 28px;

  ${({ open }) =>
    open &&
    `
    width: 50px;
    position: relative;
    left: 17px;
`}
`

const baseStyles = css`
  display: block;
  position: absolute;
  height: 5px;
  width: 50%;
  background: #fff;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
`

const oddSpans = css`
  left: 1px;
  border-radius: 2px 0 0 2px;
`

const evenSpans = css`
  left: 50%;
  border-radius: 0 2px 2px 0;
`

const topSpansOpen = css`
  top: 8px;
`

const bottomSpansOpen = css`
  top: 22px;
`

const openSpans16 = css`
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
`

const openSpans25 = css`
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
`

const openSpan1 = css`
  left: 5px;
  top: 7px;
`

const openSpan2 = css`
  left: calc(50% - 5px);
  top: 7px;
`

const openSpan3 = css`
  left: -50%;
  opacity: 0;
`

const openSpan4 = css`
  left: 100%;
  opacity: 0;
`

const openSpan5 = css`
  left: 5px;
  top: 29px;
`

const openSpan6 = css`
  left: calc(50% - 5px);
  top: 29px;
`

const Span1 = styled.span`
  ${baseStyles}
  ${oddSpans}
  top: 0px;

  ${({ open }) =>
    open &&
    `
    ${openSpan1}
    ${openSpans16}
    ${topSpansOpen}
  `}
`
const Span2 = styled.span`
  ${baseStyles}
  ${evenSpans}
  top: 0px;

  ${({ open }) =>
    open &&
    `
    ${openSpan2}
    ${openSpans25}
    ${topSpansOpen}
  `}
`
const Span3 = styled.span`
  ${baseStyles}
  ${oddSpans}
  top: 14px;

  ${({ open }) =>
    open &&
    `
    ${openSpan3}
  `}
`
const Span4 = styled.span`
  ${baseStyles}
  ${evenSpans}
  top: 14px;

  ${({ open }) =>
    open &&
    `
    ${openSpan4}
  `}
`
const Span5 = styled.span`
  ${baseStyles}
  ${oddSpans}
  top: 28px;

  ${({ open }) =>
    open &&
    `
    ${openSpan5}
    ${openSpans25}
    ${bottomSpansOpen}
  `}
`
const Span6 = styled.span`
  ${baseStyles}
  ${evenSpans}
  top: 28px;

  ${({ open }) =>
    open &&
    `
    ${openSpan6}
    ${openSpans16}
    ${bottomSpansOpen}
  `}
`

const MenuIcon = ({ isOpen, toggle }) => {
  return (
    <MenuIconContainer open={isOpen}>
      <Span1 open={isOpen}></Span1>
      <Span2 open={isOpen}></Span2>
      <Span3 open={isOpen}></Span3>
      <Span4 open={isOpen}></Span4>
      <Span5 open={isOpen}></Span5>
      <Span6 open={isOpen}></Span6>
    </MenuIconContainer>
  )
}

export default MenuIcon
