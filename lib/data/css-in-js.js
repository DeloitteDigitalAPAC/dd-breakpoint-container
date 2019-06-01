import { resolveBp } from '../data/breakpoints';
export function bp() {}
export function bpc(query, bp) {
  return function (css) {
    return !!resolveBp(query, bp) ? css : null;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2Nzcy1pbi1qcy5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlQnAiLCJicCIsImJwYyIsInF1ZXJ5IiwiY3NzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULFFBQTBCLHFCQUExQjtBQUVBLE9BQU8sU0FBU0MsRUFBVCxHQUFjLENBQUU7QUFFdkIsT0FBTyxTQUFTQyxHQUFULENBQWFDLEtBQWIsRUFBb0JGLEVBQXBCLEVBQXdCO0FBQzlCLFNBQU8sVUFBQUcsR0FBRztBQUFBLFdBQUssQ0FBQyxDQUFDSixTQUFTLENBQUNHLEtBQUQsRUFBUUYsRUFBUixDQUFYLEdBQXlCRyxHQUF6QixHQUErQixJQUFwQztBQUFBLEdBQVY7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc29sdmVCcCB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnAoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gYnBjKHF1ZXJ5LCBicCkge1xuXHRyZXR1cm4gY3NzID0+ICghIXJlc29sdmVCcChxdWVyeSwgYnApID8gY3NzIDogbnVsbCk7XG59XG4iXX0=