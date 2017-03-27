import React from 'react'
import chroma from 'chroma-js'
import { Typescale, Color, Spacing } from '../../../kndlng/src/index.js'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  body: {
    background: chroma(Color.black).alpha(0.5).css(),
    padding: Spacing().two,
    position: 'relative',
    display: 'table',
    width: '100%',
    maxWidth: '33rem',
    borderRadius: '.25rem'
  },
  input: {
    background: 'none',
    border: 0,
    display: 'block',
    width: '85%',
    fontSize: Typescale().f6
  },
  button: {
    background: Color.yellow.medium,
    position: 'absolute',
    margin: Spacing().one,
    border: 0,
    borderRadius: '.25rem',
    top: 0,
    bottom: 0,
    right: 0,
    width: 'calc(15% - .5rem)'
  }
})

const Search = ({ onSubmit, onChange, className, btnText, placeholder }) =>
  <form className={`${css(styles.body)} ${className === true ? className : null}`} onSubmit={onSubmit}>
    <input type='search' className={css(styles.input)} onChange={onChange} />
    <button children={btnText} className={css(styles.button)} />
  </form>

Search.propTypes = {
  className: React.PropTypes.string,
  btnText: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

Search.defaultProps = {
  btnText: 'Search'
}

export default Search
