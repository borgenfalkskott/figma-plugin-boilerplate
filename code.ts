figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done
  figma.closePlugin();
};