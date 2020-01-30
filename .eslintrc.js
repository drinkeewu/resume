module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-extend-native": "off",
    // 元素内容、标签和属性需要换行，无属性元素允许不换行
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignores: ["pre", "textarea"]
      }
    ],
    // 元素嵌套需要换行
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignores: ["pre", "textarea"]
      }
    ],
    // 属性“=”号两边不允许空格
    "vue/no-spaces-around-equal-signs-in-attribute": true,
    // 允许 i++
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

    //允许变量前加下划线
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_self"]
      }
    ],

    //允许多层三目元算符
    "no-nested-ternary": "off",
    //允许 && 写法
    "no-unused-expressions": "off",
    //取消检验定义但未使用变量
    // 'no-unused-vars': 'off'
    "import/no-extraneous-dependencies": "off",

    "no-param-reassign": "off",

    "no-underscore-dangle": "off",

    "consistent-return": "off",

    "import/prefer-default-export": "off",

    "global-require": "off",

    "no-plusplus": "off",

    "func-names": "off",

    "import/no-dynamic-require": "off",

  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
