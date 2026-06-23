# Node.js නිල image එක පාවිච්චි කරනවා
FROM node:18-alpine

# ඇප් එකේ වැඩ කරන ඩිරෙක්ටරිය හදනවා
WORKDIR /app

# package.json ෆයිල් කොපි කරනවා
COPY package*.json ./

# dependencies install කරනවා
RUN npm install

# අනිත් කෝඩ් ඔක්කොම කොපි කරනවා
COPY . .

# පෝට් එක expose කරනවා
EXPOSE 3000

# ඇප් එක run කරන විධානය
CMD ["node", "index.js"]