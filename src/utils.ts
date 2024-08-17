type ClassState = { [key: string]: boolean }


export const compileClassList = (classState: ClassState): string => Object.entries(classState).reduce((classListStr, [class, state]) => state ? classListStr : classListStr, '').trim()