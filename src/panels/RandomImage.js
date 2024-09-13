import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {Button, Panel, PanelHeader, PanelHeaderBack, Placeholder} from "@vkontakte/vkui";
import PropTypes from "prop-types";
import bridge from '@vkontakte/vk-bridge';

export const RandomImage = ({id, url, blob}) => {
    const routeNavigator = useRouteNavigator();

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()}/>}>
                Random Image
            </PanelHeader>
            <Placeholder>
                <img width={540} height={1000} src={url} alt="Random Image"/>
            </Placeholder>
            <Button stretched size="l" mode="secondary" onClick={() =>
                bridge.send('VKWebAppShowStoryBox', {
                    background_type: 'image',
                    blob: blob
                }).then((data) => {
                    if (data.result) {
                        console.log(data);
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }>
                Опубликовать историю!
            </Button>
        </Panel>
    );
};

RandomImage.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    blob: PropTypes.string.isRequired
};
