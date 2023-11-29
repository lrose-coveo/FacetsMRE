import {Component, h, Element, State} from '@stencil/core';


/**
 * Sample custom Atomic result component, to be used inside an Atomic Result Template.
 *
 * This component showcases a component that conditionally renders the author of a result, with a fallback to display "anonymous" in the event that no author is available for a document, for educational purposes.
 *
 * In a real life scenario, we recommend using [result-field-condition](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-field-condition/) and [atomic-result-text](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-result-text/).
 */
@Component({
  tag: 'facet-manager',
  styleUrl: 'facet-manager.css',
  shadow: true,
})
export class FacetManager {
  // The Headless result object to be resolved from the parent atomic-result component.
  @State() public showSourceFacet: boolean = true;
  // We recommended fetching the result context using the `connectedCallback` lifecycle method
  // with async/await. Using `componentWillLoad` will hang the parent `atomic-search-interface` initialization.
  public async connectedCallback() {
  }

  public hideSourceFacet(){
    this.showSourceFacet = false
  }


  public render() {
    // Do not render the component until the result object has been resolved.
    return (
      <div>
        <button onClick={() => this.hideSourceFacet()}>Hide Source Facet</button>
        <atomic-facet field="filetype" label="Filetype"></atomic-facet>
        { this.showSourceFacet ? <atomic-facet id="sourceField" field="source" label="Source"></atomic-facet>: <div></div> }
      </div>
    )
  }
}
