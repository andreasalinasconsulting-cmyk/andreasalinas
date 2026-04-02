import subprocess, time

proc = subprocess.Popen(
    ['/home/ubuntu/.local/share/pnpm/surge', '/home/ubuntu/andie-salinas-portfolio/dist/', 'andreasalinas.surge.sh'],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    text=True
)

time.sleep(2)
proc.stdin.write('hello@aigrouptech.co\n')
proc.stdin.flush()
time.sleep(2)
proc.stdin.write('AndiePortfolio2026!\n')
proc.stdin.flush()
time.sleep(10)

try:
    out, _ = proc.communicate(timeout=30)
    print(out)
except subprocess.TimeoutExpired:
    proc.kill()
    out, _ = proc.communicate()
    print(out)
