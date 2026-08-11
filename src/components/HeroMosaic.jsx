const colors = {
  red: '#842433',
  rose: '#c97882',
  blush: '#e6b9be',
  paper: '#f6f2ef',
}

const portraitTiles = [
  ['blush', 'rose', 'quarter-top-left'],
  ['paper', 'red', 'quarter-top-right'],
  ['red', 'rose', 'circle-large'],
  ['red', 'blush', 'half-bottom'],

  ['paper', 'rose', 'quarter-top-right'],
  ['rose', 'blush', 'circle'],
  ['blush', 'paper', 'quarter-bottom-left'],
  ['blush', 'rose', 'circle'],

  ['blush', 'red', 'quarter-bottom-right'],
  ['paper', 'rose', 'quarter-bottom-left'],
  ['rose', 'blush', 'circle'],
  ['rose', 'paper', 'quarter-top-left'],

  ['paper', 'rose', 'circle-large'],
  ['red', 'rose', 'quarter-bottom-right'],
  ['paper', 'blush', 'quarter-top-right'],
  ['blush', 'red', 'quarter-bottom-left'],

  ['rose', 'paper', 'quarter-top-right'],
  ['rose', 'red', 'quarter-top-left'],
  ['red', 'rose', 'quarter-bottom-right'],
  ['red', 'blush', 'quarter-bottom-left'],

  ['blush', 'red', 'quarter-bottom-right'],
  ['paper', 'rose', 'circle'],
  ['rose', 'red', 'quarter-top-right'],
  ['rose', 'blush', 'half-top'],
]

const rotatedShape = {
  'quarter-top-left': 'quarter-top-right',
  'quarter-top-right': 'quarter-bottom-right',
  'quarter-bottom-right': 'quarter-bottom-left',
  'quarter-bottom-left': 'quarter-top-left',
  'half-top': 'half-right',
  'half-right': 'half-bottom',
  'half-bottom': 'half-left',
  'half-left': 'half-top',
  circle: 'circle',
  'circle-large': 'circle-large',
}

const landscapeTiles = Array.from({ length: 4 }, (_, row) =>
  Array.from({ length: 6 }, (_, column) => {
    const [background, foreground, shape] = portraitTiles[(5 - column) * 4 + row]
    return [background, foreground, rotatedShape[shape]]
  }),
).flat()

function MosaicTile({ tile }) {
  const [background, foreground, shape] = tile

  return (
    <span className="mosaic__tile" style={{ '--tile-color': colors[background], '--shape-color': colors[foreground] }}>
      <span className={`mosaic__shape mosaic__shape--${shape}`} />
    </span>
  )
}

export default function HeroMosaic({ orientation }) {
  const tiles = orientation === 'landscape' ? landscapeTiles : portraitTiles

  return (
    <div className={`mosaic mosaic--${orientation}`}>
      {tiles.map((tile, index) => <MosaicTile key={`${orientation}-${index}`} tile={tile} />)}
    </div>
  )
}
