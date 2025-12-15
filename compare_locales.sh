#!/bin/bash

MIDDLEWARE_FILE="middleware.ts"
ROUTING_FILE="src/i18n/routing.ts"

# Extraer locales del matcher
matcher_locales=$(grep -oE '/\(([^)]+)\)/' "$MIDDLEWARE_FILE" | \
  sed -E 's|/\(([^)]+)\)/|\1|' | \
  tr '|' '\n' | sort -u)

# Extraer locales de LOCALES_SUPPORTED, ignorando usos como LOCALES_SUPPORTED[0]
routing_locales=$(grep -E 'LOCALES_SUPPORTED\s*=\s*\[[^]]*\]' "$ROUTING_FILE" | \
  grep -oE '\[.*\]' | \
  tr -d '"[] ' | \
  tr ',' '\n' | \
  sort -u)

# Debug
echo "🟦 Locales en matcher:"
echo "$matcher_locales"
echo "🟨 Locales en LOCALES_SUPPORTED:"
echo "$routing_locales"

# Comparar
diff_output=$(diff <(echo "$matcher_locales") <(echo "$routing_locales"))

if [ -z "$diff_output" ]; then
  echo "✅ Los locales coinciden entre matcher y LOCALES_SUPPORTED"
else
  echo "❌ Diferencias encontradas entre matcher y LOCALES_SUPPORTED:"
  echo "$diff_output"
  exit 1
fi
