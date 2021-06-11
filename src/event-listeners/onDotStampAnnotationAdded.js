import core from 'core';
import defaultTool from 'constants/defaultTool';
import actions from 'actions';

const { ToolNames } = window.Tools;

export default dispatch => dotStampAnnotation => {
  core.setToolMode(defaultTool);
  core.getTool(ToolNames.FORM_FILL_DOT).hidePreview();
  dispatch(actions.setActiveToolGroup(''));
  core.selectAnnotation(dotStampAnnotation);
};