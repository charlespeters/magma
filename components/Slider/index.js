import React from 'react'
import { Obsidian } from '../../../kndlng/src/index.js'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Obsidian.blue,
    padding: 5
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    appearance: 'none',
    '::-webkit-slider-runnable-track': {
      background: Obsidian.red,
      height: 8,
      marginTop: 8,
      marginBottom: 8
    },
    '::-webkit-media-slider-container': {
      alignItems: 'center'
    },
    '::-webkit-slider-thumb': {
      width: 24,
      height: 24,
      backgroundColor: Obsidian.yellow,
      border: 0,
      borderRadius: 999,
      appearance: 'none'
    },
    '::-moz-range-thumb': {
      width: 24,
      height: 24,
      backgroundColor: Obsidian.yellow,
      border: 0,
      borderRadius: 999
    }
  }
})

const Slider = props =>
  <div className={css(styles.parent)}>
    <label htmlFor={props.name} children={props.label} />
    <input {...props} type='range' name={props.name} className={css(styles.input)} />
  </div>

export default Slider
