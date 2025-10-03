// ring color for player/avatar
const RingColor = ['red', '#00bfa5', '#333333'];
const playersRingColor = Array(1000).fill().map((_, i) => RingColor[i % RingColor.length])

export default playersRingColor