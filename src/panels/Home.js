import {Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar} from '@vkontakte/vkui';
import {useRouteNavigator} from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';

export const Home = ({id}) => {
    const routeNavigator = useRouteNavigator();

    return (
        <Panel id={id}>
            <PanelHeader>Главная</PanelHeader>
            <Group header={<Header mode="secondary">Navigation Example</Header>}>
                <Div>
                    <Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('random-image')}>
                        Покажи картинку!
                    </Button>
                </Div>
            </Group>
        </Panel>
    );
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
};
