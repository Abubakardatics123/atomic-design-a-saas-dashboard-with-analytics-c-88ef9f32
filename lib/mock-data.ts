// Mock data for the SaaS Analytics Dashboard

export const kpiData = {
  revenue: { value: 124500, change: 12.5, label: "Total Revenue", prefix: "$" },
  mrr: { value: 18750, change: 8.2, label: "MRR", prefix: "$" },
  activeUsers: { value: 9842, change: 5.7, label: "Active Users", prefix: "" },
  churnRate: { value: 2.4, change: -0.3, label: "Churn Rate", prefix: "", suffix: "%" },
};

export const revenueData = [
  { month: "Jan", revenue: 82000, mrr: 12400 },
  { month: "Feb", revenue: 88500, mrr: 13200 },
  { month: "Mar", revenue: 91200, mrr: 13800 },
  { month: "Apr", revenue: 95000, mrr: 14500 },
  { month: "May", revenue: 102000, mrr: 15600 },
  { month: "Jun", revenue: 108000, mrr: 16200 },
  { month: "Jul", revenue: 112500, mrr: 17100 },
  { month: "Aug", revenue: 115000, mrr: 17400 },
  { month: "Sep", revenue: 118000, mrr: 17900 },
  { month: "Oct", revenue: 120500, mrr: 18200 },
  { month: "Nov", revenue: 122000, mrr: 18500 },
  { month: "Dec", revenue: 124500, mrr: 18750 },
];

export const signupsData = [
  { week: "W1 Jan", signups: 142 },
  { week: "W2 Jan", signups: 168 },
  { week: "W3 Jan", signups: 155 },
  { week: "W4 Jan", signups: 190 },
  { week: "W1 Feb", signups: 210 },
  { week: "W2 Feb", signups: 198 },
  { week: "W3 Feb", signups: 225 },
  { week: "W4 Feb", signups: 240 },
  { week: "W1 Mar", signups: 215 },
  { week: "W2 Mar", signups: 260 },
  { week: "W3 Mar", signups: 278 },
  { week: "W4 Mar", signups: 295 },
];

export const activeUsersData = [
  { date: "Jan", users: 5200 },
  { date: "Feb", users: 5800 },
  { date: "Mar", users: 6100 },
  { date: "Apr", users: 6500 },
  { date: "May", users: 7200 },
  { date: "Jun", users: 7600 },
  { date: "Jul", users: 8100 },
  { date: "Aug", users: 8400 },
  { date: "Sep", users: 8700 },
  { date: "Oct", users: 9100 },
  { date: "Nov", users: 9500 },
  { date: "Dec", users: 9842 },
];

export const trafficSourceData = [
  { name: "Organic Search", value: 38, color: "#6366F1" },
  { name: "Direct", value: 24, color: "#8B5CF6" },
  { name: "Referral", value: 18, color: "#22D3EE" },
  { name: "Social Media", value: 12, color: "#F59E0B" },
  { name: "Email", value: 8, color: "#10B981" },
];

export const planBreakdownData = [
  { month: "Jan", starter: 28000, pro: 38000, enterprise: 16000 },
  { month: "Feb", starter: 30000, pro: 40000, enterprise: 18500 },
  { month: "Mar", starter: 29000, pro: 42000, enterprise: 20200 },
  { month: "Apr", starter: 32000, pro: 43000, enterprise: 20000 },
  { month: "May", starter: 34000, pro: 46000, enterprise: 22000 },
  { month: "Jun", starter: 35000, pro: 48000, enterprise: 25000 },
  { month: "Jul", starter: 36000, pro: 50000, enterprise: 26500 },
  { month: "Aug", starter: 37000, pro: 51000, enterprise: 27000 },
  { month: "Sep", starter: 38000, pro: 52000, enterprise: 28000 },
  { month: "Oct", starter: 38500, pro: 53000, enterprise: 29000 },
  { month: "Nov", starter: 39000, pro: 54000, enterprise: 29000 },
  { month: "Dec", starter: 40000, pro: 55000, enterprise: 29500 },
];

export const churnData = [
  { month: "Jan", churn: 3.2 },
  { month: "Feb", churn: 3.0 },
  { month: "Mar", churn: 2.9 },
  { month: "Apr", churn: 2.8 },
  { month: "May", churn: 2.7 },
  { month: "Jun", churn: 2.6 },
  { month: "Jul", churn: 2.5 },
  { month: "Aug", churn: 2.5 },
  { month: "Sep", churn: 2.4 },
  { month: "Oct", churn: 2.4 },
  { month: "Nov", churn: 2.4 },
  { month: "Dec", churn: 2.4 },
];

export const usersData = [
  { id: "u1", name: "Alice Johnson", email: "alice@acme.com", plan: "Enterprise", status: "active", signupDate: "2023-01-15", lastActive: "2024-01-10", avatar: "AJ", revenue: 1200 },
  { id: "u2", name: "Bob Martinez", email: "bob@techcorp.io", plan: "Pro", status: "active", signupDate: "2023-02-20", lastActive: "2024-01-09", avatar: "BM", revenue: 299 },
  { id: "u3", name: "Carol White", email: "carol@startup.co", plan: "Starter", status: "active", signupDate: "2023-03-05", lastActive: "2024-01-08", avatar: "CW", revenue: 49 },
  { id: "u4", name: "David Kim", email: "david@globalfirm.com", plan: "Enterprise", status: "active", signupDate: "2023-01-28", lastActive: "2024-01-10", avatar: "DK", revenue: 1200 },
  { id: "u5", name: "Eva Chen", email: "eva@innovate.ai", plan: "Pro", status: "churned", signupDate: "2023-04-12", lastActive: "2023-12-01", avatar: "EC", revenue: 299 },
  { id: "u6", name: "Frank Lee", email: "frank@devshop.dev", plan: "Starter", status: "active", signupDate: "2023-05-18", lastActive: "2024-01-07", avatar: "FL", revenue: 49 },
  { id: "u7", name: "Grace Park", email: "grace@mediahouse.com", plan: "Pro", status: "trial", signupDate: "2023-12-20", lastActive: "2024-01-10", avatar: "GP", revenue: 0 },
  { id: "u8", name: "Henry Brown", email: "henry@cloudbase.io", plan: "Enterprise", status: "active", signupDate: "2023-02-14", lastActive: "2024-01-09", avatar: "HB", revenue: 1200 },
  { id: "u9", name: "Iris Nguyen", email: "iris@saastools.com", plan: "Pro", status: "active", signupDate: "2023-06-30", lastActive: "2024-01-08", avatar: "IN", revenue: 299 },
  { id: "u10", name: "Jack Wilson", email: "jack@fintech.co", plan: "Starter", status: "churned", signupDate: "2023-07-22", lastActive: "2023-11-15", avatar: "JW", revenue: 49 },
  { id: "u11", name: "Kate Adams", email: "kate@ecomm.store", plan: "Pro", status: "active", signupDate: "2023-08-10", lastActive: "2024-01-10", avatar: "KA", revenue: 299 },
  { id: "u12", name: "Liam Scott", email: "liam@agency.design", plan: "Starter", status: "trial", signupDate: "2023-12-28", lastActive: "2024-01-09", avatar: "LS", revenue: 0 },
];

export const transactionsData = [
  { id: "txn_001", user: "Alice Johnson", plan: "Enterprise", amount: 1200, date: "2024-01-10", status: "paid" },
  { id: "txn_002", user: "David Kim", plan: "Enterprise", amount: 1200, date: "2024-01-10", status: "paid" },
  { id: "txn_003", user: "Henry Brown", plan: "Enterprise", amount: 1200, date: "2024-01-09", status: "paid" },
  { id: "txn_004", user: "Bob Martinez", plan: "Pro", amount: 299, date: "2024-01-09", status: "paid" },
  { id: "txn_005", user: "Iris Nguyen", plan: "Pro", amount: 299, date: "2024-01-08", status: "paid" },
  { id: "txn_006", user: "Kate Adams", plan: "Pro", amount: 299, date: "2024-01-08", status: "paid" },
  { id: "txn_007", user: "Carol White", plan: "Starter", amount: 49, date: "2024-01-08", status: "paid" },
  { id: "txn_008", user: "Frank Lee", plan: "Starter", amount: 49, date: "2024-01-07", status: "paid" },
  { id: "txn_009", user: "Eva Chen", plan: "Pro", amount: 299, date: "2024-01-06", status: "failed" },
  { id: "txn_010", user: "Jack Wilson", plan: "Starter", amount: 49, date: "2024-01-05", status: "refunded" },
];

export const notificationsData = [
  { id: "n1", title: "New Enterprise signup", message: "Acme Corp just upgraded to Enterprise plan", time: "2 min ago", read: false, type: "success" },
  { id: "n2", title: "Churn alert", message: "Eva Chen's subscription has been cancelled", time: "1 hour ago", read: false, type: "warning" },
  { id: "n3", title: "MRR milestone", message: "You've reached $18,750 MRR — new record!", time: "3 hours ago", read: false, type: "success" },
  { id: "n4", title: "Payment failed", message: "Eva Chen's payment of $299 failed", time: "5 hours ago", read: true, type: "error" },
  { id: "n5", title: "New trial started", message: "Grace Park started a 14-day Pro trial", time: "1 day ago", read: true, type: "info" },
];

export const revenueKpis = {
  mrr: { value: 18750, change: 8.2 },
  arr: { value: 225000, change: 8.2 },
  ltv: { value: 2840, change: 3.1 },
  arpu: { value: 190, change: 2.4 },
};
