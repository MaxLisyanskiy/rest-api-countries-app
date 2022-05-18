import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setTheme } from '../store/theme/theme-actions'

import { Link } from 'react-router-dom'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { Container } from './Container'

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`

const Title = styled(Link).attrs({
	to: '/',
})`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	text-transform: capitalize;
`

export const Header = () => {
	const dispatch = useDispatch()
	const theme = useSelector(state => state.theme)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	const handleTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
	}

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ModeSwitcher onClick={handleTheme}>
						{theme === 'light' ? (
							<IoMoonOutline size='14px' />
						) : (
							<IoMoon size='14px' />
						)}{' '}
						<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
