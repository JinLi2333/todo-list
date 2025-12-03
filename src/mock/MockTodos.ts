import type { TodoItem } from "@/types/todo";

export const mockTodos: TodoItem[] = [
  // 我的一天 (id: 1)
  {
    id: "todo-1",
    listIds: ["1"],
    title: "完成每日站会",
    completed: false,
  },
  {
    id: "todo-2",
    listIds: ["1"],
    title: "回复重要邮件",
    completed: true,
  },
  {
    id: "todo-3",
    listIds: ["1", "2"],
    title: "准备项目演示文稿",
    completed: false,
  },

  // 重要 (id: 2)
  {
    id: "todo-4",
    listIds: ["2"],
    title: "提交季度报告",
    completed: false,
  },
  {
    id: "todo-5",
    listIds: ["2"],
    title: "与客户确认需求",
    completed: false,
  },

  // 计划内 (id: 3)
  {
    id: "todo-6",
    listIds: ["3"],
    title: "下周一团队会议",
    completed: false,
  },
  {
    id: "todo-7",
    listIds: ["3"],
    title: "周五前完成代码审查",
    completed: false,
  },

  // 已分配给我 (id: 4)
  {
    id: "todo-8",
    listIds: ["4"],
    title: "修复登录页面bug",
    completed: false,
  },
  {
    id: "todo-9",
    listIds: ["4"],
    title: "优化数据库查询",
    completed: true,
  },

  // 标记的电子邮件 (id: 5)
  {
    id: "todo-10",
    listIds: ["5"],
    title: "回复HR关于培训的邮件",
    completed: false,
  },

  // 任务 (id: 6)
  {
    id: "todo-11",
    listIds: ["6"],
    title: "整理项目文档",
    completed: false,
  },
  {
    id: "todo-12",
    listIds: ["6"],
    title: "更新README文件",
    completed: true,
  },

  // 工作 (id: 7) - custom list
  {
    id: "todo-13",
    listIds: ["7"],
    title: "完成API接口开发",
    completed: false,
  },
  {
    id: "todo-14",
    listIds: ["7"],
    title: "编写单元测试",
    completed: false,
  },
  {
    id: "todo-15",
    listIds: ["7", "2"],
    title: "部署生产环境",
    completed: false,
  },

  // 学习 (id: 8) - custom list
  {
    id: "todo-16",
    listIds: ["8"],
    title: "学习React 19新特性",
    completed: false,
  },
  {
    id: "todo-17",
    listIds: ["8"],
    title: "完成TypeScript进阶课程",
    completed: true,
  },
  {
    id: "todo-18",
    listIds: ["8"],
    title: "阅读《Clean Code》第5章",
    completed: false,
  },
];
