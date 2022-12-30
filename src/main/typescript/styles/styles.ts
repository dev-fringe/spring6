import { html } from 'lit-element';

// In this file we define our css inside a style tag and export it.
export const styles = html`
<style>
paper-button.custom {
  --paper-button-ink-color: var(--paper-pink-a200);
  /* These could also be individually defined for each of the
    specific css classes, but we'll just do it once as an example */
  --paper-button-flat-keyboard-focus: {
    background-color: var(--paper-pink-a200) !important;
    color: white !important;
  };
  --paper-button-raised-keyboard-focus: {
    background-color: var(--paper-pink-a200) !important;
    color: white !important;
  };
}
paper-button.custom:hover {
  background-color: var(--paper-indigo-100);
}
paper-button.pink {
  color: var(--paper-pink-a200);

}
paper-button.indigo {
  background-color: var(--paper-indigo-500);
  color: white;
  --paper-button-raised-keyboard-focus: {
    background-color: var(--paper-pink-a200) !important;
    color: white !important;
  };
}
paper-button.green {
  background-color: var(--paper-green-500);
  color: white;
}
paper-button.green[active] {
  background-color: var(--paper-red-500);
}
paper-button.disabled {
  color: white;
  background-color: bisque;
}
</style>
`