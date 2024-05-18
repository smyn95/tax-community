type RecordType = Record<string, any>;
type PrimitiveType = Date | string | number | boolean | null | undefined;
type SupportType = RecordType | PrimitiveType;

type Converter = (str: string) => string;

function snakeConverter(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toLowerCase();
}

function camelConverter(str: string) {
  return snakeConverter(str).replace(/(_\w)/g, w => w[1].toUpperCase());
}

function pascalConverter(str: string) {
  return camelConverter(str).replace(/^[a-z]/, w => w.toUpperCase());
}

function kebabConverter(str: string) {
  return snakeConverter(str).replace(/_/g, '-');
}

function convertCase(obj: SupportType, converter: Converter): any {
  if (!obj || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return obj;

  return Array.isArray(obj)
    ? obj.map(v => convertCase(v, converter))
    : Object.keys(obj).reduce((acc, key) => {
        const convertedKey = converter(key);
        const value = obj[key];
        acc[convertedKey] = convertCase(value, converter);
        return acc;
      }, {} as RecordType);
}

export function toCamelCase<TResult>(obj: SupportType): TResult {
  return convertCase(obj, camelConverter);
}

export function toSnakeCase<TResult>(obj: SupportType): TResult {
  return convertCase(obj, snakeConverter);
}

export function toPascalCase<TResult>(obj: SupportType): TResult {
  return convertCase(obj, pascalConverter);
}

export function toKebabCase<TResult>(obj: SupportType): TResult {
  return convertCase(obj, kebabConverter);
}
