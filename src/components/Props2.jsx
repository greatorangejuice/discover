import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Любые типы. Числа, строки, элементы. 
Component.propTypes = {
    node: PropTypes.node,
}

// Element:
Component.propTypes = {
    elem: PropTypes.element,
}

Component.propTypes = {
    instance: PropTypes.node,
}

