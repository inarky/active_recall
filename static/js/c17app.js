const name = 'c17app';

function start() {
  console.log( 'start' );
  return true;
}

class C17app {
  constructor( name ) {
    this.name = name;
  }
  log( msg ) {
    console.log( msg );
  }
}

export { name, start, C17app };
