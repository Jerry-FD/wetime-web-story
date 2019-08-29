import cdnPoints from './cdnPoints.js'

interface Iconfig {
  w: number,
  h: number,
  ignoreWidth: boolean,
  ignoreHeight: boolean
}

interface Ia {
  w: number,
  h: number
}

interface Ib {
  w: number,
  h: number
}

function _customDistance(a: Ia, b: Ib) {
  return Math.min(Math.abs(a.w - b.w), Math.abs(a.h - b.h));
}

function _manhattanDistance(a: Ia, b: Ib) { // 曼哈顿距离
  return Math.abs(a.w - b.w) + Math.abs(a.h - b.h);
}


function cdnNearest(config: Iconfig): Ia|null {
  if (!config || (!config.w && !config.h)) return null;

  let result = { w: 0, h: 0 };
  if (config && (config.ignoreWidth || config.ignoreHeight)) {
    const expectValue = config.ignoreWidth ? config.h : config.w
    const queryMark = config.ignoreWidth ? 'h' : 'w' // 需要查询的维度
    const cdnCandidates = config.ignoreWidth ? cdnPoints.ignoreWidth : cdnPoints.ignoreHeight
    let minDistance = 1000000;

    for (let i = 0; i < cdnCandidates.length; i++) {
      const currentPoint = cdnCandidates[i]
      const cdnValue = currentPoint[queryMark]

      if (cdnValue >= expectValue && (cdnValue - expectValue) < minDistance) {
        minDistance = cdnValue - expectValue;
        result = currentPoint;
      }
    }
  } else {
    const generalPoints = cdnPoints.general
    let minDistance = 1000000
    let minManManhattan = 1000000 // 最小曼哈顿距离
    for (let i = 0; i < generalPoints.length; i++) {
      const singlePoint = generalPoints[i];
      if (singlePoint.w >= config.w && singlePoint.h >= config.h) {
        const d = _customDistance(singlePoint, config)
        const manhattanD = _manhattanDistance(singlePoint, config)

        if (d <= minDistance) { // 最小距离
          minDistance = d;
          minManManhattan = manhattanD;
          result = singlePoint;
        } else if (d === minDistance) { // 已经是最小距离时，比较曼哈顿距离
          if (manhattanD < minManManhattan) {
            minManManhattan = manhattanD;
            result = singlePoint;
          }
        } else if (singlePoint.w < config.w) {
          break; // 宽度已经小于目标宽度，直接跳出
        }
      }
    }
  }
  if (result.w && result.h) {
    return result;
  }
  return null;
}

export default cdnNearest
