import React from 'react'
import { Color, Spacing } from '../../../kndlng/src/index.js'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  header: {
    color: Color.offwhite,
    backgroundColor: Color.blue.medium,
    padding: Spacing().three,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontWeight: '400',
    fontSize: '1.5rem',
    marginRight: Spacing().three
  },
  child: {
    flex: '1 1 auto'
  }
})

const Header = props =>
  <header className={`${css(styles.header)} ${props.className ? props.className : null}`}>
    <h1 className={css(styles.title)} children={props.title} />
    <div className={css(styles.child)}>
      {props.children}
    </div>
  </header>

Header.propTypes = {
  children: React.PropTypes.element,
  title: React.PropTypes.string,
  className: React.PropTypes.string
}

export default Header
