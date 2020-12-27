import React from 'react'
import { StatefulSelect } from 'baseui/select'
import { Box, FormLabel, FormControl, Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Select = ({ change, label, ...rest }) => {
  

  return (
    <Box  fontSize='20px'>
      <FormControl pr='200px' >
          <Flex>
            <FormLabel  pl={3} pt={3} >
            {label}
            </FormLabel>
            <StatefulSelect
            {...rest}
            paddingLeft='100px'
            onChange={change}
            overrides={{
               
                DropdownListItem: {
                style: {
                    ':hover': {
                    backgroundColor: 'blue',
                    color: 'white'
                    }
                }
                },
                SelectArrow: {
                style: {
                    color: 'transparent'
                }
                },
                ControlContainer: {
                style: {
                    outline: '0px  transparent',
                    borderLeftWidth: '0px',
                    borderRightWidth: '0px',
                    borderTopWidth: '0px',
                    borderBottomWidth: '0px',
                    backgroundColor: 'transparent'
                }
                },
                SingleValue: {
                style: {
                    color: 'gray'
                }
                },
                Placeholder: {
                style: {
                    color: 'gray'
                }
                },
                DropdownContainer: {
                style: {
                    width:'500px'
                }
                }
            }}
            />
          </Flex>
      </FormControl>
    </Box>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.array,
  change: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  rest: PropTypes.node
}

export default Select